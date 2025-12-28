import { Request, Response } from "express";
import * as serviceService from "../services/service.service.js";

export const createServiceController = async (req: Request, res: Response) => {
  try {
    const service = await serviceService.createService(req.body);
    res.status(201).json(service);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllServicesController = async (_: Request, res: Response) => {
  try {
    const services = await serviceService.getAllServices();
    res.json(services);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getServicesByCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    const services = await serviceService.getServicesByCategory(
      req.params.category
    );
    res.json(services);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
