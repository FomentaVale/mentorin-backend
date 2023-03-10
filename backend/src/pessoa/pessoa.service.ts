import { Injectable } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService){}

  async create(idUsuario: number, createPessoaDto: CreatePessoaDto) {
    return await this.prisma.pessoa.create({
      data: {
        idUsuario,
        ...createPessoaDto
      }
    });
  }

  async findAll() {
    return await this.prisma.pessoa.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pessoa.findUnique({
      where:{
        idPessoa: id,
      }
    }) 
  }

  async update(id: number, data: UpdatePessoaDto) {
    return await this.prisma.pessoa.update({
      where: { idPessoa: id },
      data
    });
  }

  async remove(id: number) {
    await this.prisma.pessoa.delete({
      where: { idPessoa: id }
    });
    return `Pessoa ${id} removida`;
  }
}
