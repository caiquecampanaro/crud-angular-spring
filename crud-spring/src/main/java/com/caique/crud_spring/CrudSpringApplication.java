package com.caique.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.caique.crud_spring.model.Produto;
import com.caique.crud_spring.repository.ProdutoRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean //gerenciar todo o ciclo de vida
	CommandLineRunner iniDatabase(ProdutoRepository produtoRepository) {
		return args -> {
			produtoRepository.deleteAll();

			Produto p = new Produto();
			p.setNome("Bolonha");
			p.setCategoria("Ilícitos");
			p.setPreco(25);
			
			produtoRepository.save(p);
		};
	}
}
