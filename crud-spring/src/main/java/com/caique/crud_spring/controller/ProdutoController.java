package com.caique.crud_spring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.caique.crud_spring.model.Produto;
import com.caique.crud_spring.repository.ProdutoRepository;

import lombok.AllArgsConstructor;

@RestController // diz que essa classe tem um endpoint que da acesso ao post,delete,get
@RequestMapping("/api/produtos")
@AllArgsConstructor
public class ProdutoController {

    private final ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> list() {
        return produtoRepository.findAll();
    }
}
