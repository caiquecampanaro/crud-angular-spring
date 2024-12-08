package com.caique.crud_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.caique.crud_spring.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
