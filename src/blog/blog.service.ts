import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Article } from './entities/blog.entity';

@Injectable()
export class BlogService {

  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>
  ) { }

  async create(createBlogDto: CreateBlogDto) {
    const article = await this.articlesRepository.save(createBlogDto)
    return article;
  }

  findAll() {
    return this.articlesRepository.find();
  }

  findOne(id: number) {
    Logger.log("voici le id :", id)
    return this.articlesRepository.findOne(
      {
        where: {
          id: id
        }
      });
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return `This action updates a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }
}
