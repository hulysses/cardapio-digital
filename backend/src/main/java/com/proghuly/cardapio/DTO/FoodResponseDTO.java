package com.proghuly.cardapio.DTO;

import com.proghuly.cardapio.entity.Food;

public record FoodResponseDTO(Long id, String title, String image, double price) {

    public FoodResponseDTO(Food food) {
        this(food.getId(), food.getTitle(), food.getImage(), food.getPrice());
    }
}
