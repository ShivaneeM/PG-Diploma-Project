package com.app.unittests;


import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.code.dao.CategoryRepository;
import com.code.pojos.Category;
import com.code.pojos.Status;

//@DataJpaTest
//@AutoConfigureTestDatabase(replace=Replace.NONE)
//@Rollback(false)
//@ContextConfiguration
@SpringBootTest(classes = Category.class)
//@ContextConfiguration(classes = Category.class)
class TestCategory {
	
	
	@Autowired
	private CategoryRepository crepo;
	
	
//	@Test
//	public void test() {
//		assertNotNull(crepo);
//	}
	
	
	@Test
	void categoryTest() {
		

		List<Category> category =List.of(new Category("vit-A", Status.ACTIVE),new Category("vit-C", Status.ACTIVE));
		
		List<Category>category2=crepo.saveAll(category);
		
		
		assertEquals(2, category2.size());
		
	}
	
}
