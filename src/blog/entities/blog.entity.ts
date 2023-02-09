import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";

@Entity()
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ type: 'text' })
    body: string;

    @Column({ type: 'boolean', default: true })
    published: boolean;

    @Column({ type: 'int', default: 0 })
    likes: number;

    @CreateDateColumn()
    createAt: Date;

    @OneToMany(type => Comment, comment => comment.article)
    comments: Comment[]

}
