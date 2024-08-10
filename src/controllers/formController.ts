import { Request, Response } from 'express';
import Form from '../models/formModel';

export const submitForm = async (req: Request, res: Response) => {
  try {
    const { name, email, message, phone } = req.body;

    const existingUser = await Form.findOne({ email });
    if (existingUser) {
      return res.status(404).json({
        status: 400,
        messege: "Email already exists",
      });
    }

    const newForm = new Form({
      name,
      email,
      message,
      phone
    });

    await newForm.save();

    return res.status(200).json({
        status: 201,
        message: "Form submitted successfully!",
        data: newForm,
    });

  } catch (error:any) {
    return res.status(404).json({
        status: 404,
        messege: error?.message,
    });
  }
};

export const getForms = async (req: Request, res: Response) => {
  try {
    const forms = await Form.find().sort({ createdAt: -1 });

    return res.status(200).json({
        status: 200,
        message: "Form fetched successfully!",
        data: forms,
    });
  } catch (error:any) {
    return res.status(404).json({
        status: 404,
        messege: error?.message,
    });
  }
};
