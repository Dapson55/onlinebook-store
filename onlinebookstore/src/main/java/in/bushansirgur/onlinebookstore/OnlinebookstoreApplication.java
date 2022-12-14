package in.bushansirgur.onlinebookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "in.bushansirgur.onlinebookstore.repository")
@SpringBootApplication
public class OnlinebookstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnlinebookstoreApplication.class, args);
	}

}
