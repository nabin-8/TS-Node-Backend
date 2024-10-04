import express from "express";
import { EmployeeModel } from "../models/Employee.model";

class EmployeeController {
    getAllEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const employees = await EmployeeModel.find();
            response.status(200).json({ data: employees });  // No return needed
        } catch (error) {
            response.status(400).json({ message: 'Failed to fetch employees' });
        }
    }

    getEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const employee = await EmployeeModel.findById(id);
            if (!employee) {
                response.status(404).json({ message: 'Employee not found' });
                return;  // Explicitly exit if employee is not found
            }
            response.status(200).json({ data: employee });
        } catch (error) {
            response.status(400).json({ message: 'Failed to fetch employee' });
        }
    }

    createEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { name, email, mobile, dob, doj } = request.body;
            const employee = new EmployeeModel({ name, email, mobile, dob, doj });
            await employee.save();
            response.status(201).json({ message: "Employee Created", data: employee });
        } catch (error) {
            response.status(400).json({ message: 'Failed to create employee' });
        }
    }

    updateEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const { name, email, mobile, dob, doj } = request.body;
            const employee = await EmployeeModel.findById(id);

            if (!employee) {
                response.status(404).json({ message: 'Employee not found' });
                return;
            }

            employee.name = name;
            employee.email = email;
            employee.mobile = mobile;
            employee.dob = dob;
            employee.doj = doj;

            await employee.save();
            response.status(200).json({ message: "Employee Updated", data: employee });
        } catch (error) {
            response.status(400).json({ message: 'Failed to update employee' });
        }
    }

    deleteEmployee = async (request: express.Request, response: express.Response) => {
        try {
            const { id } = request.params;
            const deletedEmployee = await EmployeeModel.findByIdAndDelete(id);

            if (!deletedEmployee) {
                response.status(404).json({ message: 'Employee not found' });
                return;
            }

            response.status(200).json({ message: "Employee Deleted" });
        } catch (error) {
            response.status(400).json({ message: 'Failed to delete employee' });
        }
    }
}

export default new EmployeeController();
