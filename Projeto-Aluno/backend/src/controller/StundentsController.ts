import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Students } from '../entity/Students';

export const getStudents = async(request: Request, response: Response) => {
    const students = await getRepository(Students).find();
    return response.json(students);
};

export const saveStudent = async(request: Request, response: Response) => {
    const student = await getRepository(Students).save(request.body);
    return response.json(student);
};

export const getStudent = async(request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).findOne(id)
    return response.json(student);
};

export const updateStudent = async(request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).update(id, request.body);
    if(student.affected == 1) {
        const updatedStudent = await getRepository(Students).findOne(id);
        return response.json(updatedStudent);
    } else {
        return response.status(404).json({message: "Estudante não encontrado!"});
    };
};

export const deleteStudent = async(request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).delete(id);
    if(student.affected == 1) {
        return response.status(200).json({message: "Estudante excluído com sucesso!"})
    } else {
        return response.status(404).json({message: "Estudante não encontrado!"});
    }
};

export const registeredStudent = async(request: Request, response: Response) => {
    const { id } = request.params;
    const student = await getRepository(Students).update(id, { registered: true});

    if(student.affected == 1) {
        const registeredStudent = await getRepository(Students).findOne(id);
        return response.json(registeredStudent);
    } else {
        return response.status(404).json({message: "Estudante não encontrado!"});
    }
};