package com.code.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.code.dto.ProductDto;
import com.code.pojos.Product;

public interface IProductService {
	String addProduct(ProductDto input);

	List<Product> getProductsByCategory(Integer id);

	ProductDto editProduct(ProductDto input);

	List<ProductDto> getStockReportByCategory(String categoryName);

	String deleteProduct(Integer pid);

	ProductDto getProductDetail(Integer pid);
	
	Page<Product> getProducts(Pageable pageable);
	
}
