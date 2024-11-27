package com.proghuly.cardapio.repository;

import com.proghuly.cardapio.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Long> {
}
