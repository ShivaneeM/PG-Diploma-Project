package com.app.unittests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;

import com.code.pojos.User;
import com.code.service.UserServiceImpl;

@DataJpaTest
//@AutoConfigureTestDatabase(replace = Replace.NONE)
//@Rollback(false)

@SpringBootTest

@ContextConfiguration(classes = User.class)
class TestUser {
	
//	@Autowired
//	private PasswordEncoder encoder;
	
	@Autowired
	private UserServiceImpl userser;
	
//	@Test
//	void test() {
//		assertNotNull(urepo);
//	}
//	@Test
//	void userTest() {
//		List<User> user =List.of(new User("Manasi", "Rane", "manasi@gmail.com", encoder.encode("Manasi@123"), "", Role.CUSTOMER));
//				
//	
//		urepo.saveAll(user);
//	}
//	
	
	
	@Test
	void testUser() {
          User user=userser.findByEmail("manasi@gmail.com");
		assertEquals("manasi@gmail.com",user.getEmail());
	}


	}

	

