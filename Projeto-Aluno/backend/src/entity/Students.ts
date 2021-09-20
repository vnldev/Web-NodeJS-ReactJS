import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Students{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    ra: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column({
        default: false
    })
    registered: boolean;

    @Column()
    birth_date: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}