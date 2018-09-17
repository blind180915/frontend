package kr.or.connect.diexam01;
 
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
 
public class ApplicationContextExam04 {
 
    public static void main(String[] args) {
        ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig2.class);
        
//      Car car = (Car)ac.getBean("car");
        // 클래스 타입을 넣어주기 때문에 메소드명과 관계없이 연결되어 실수를 줄일 수 있다.
        Car car = ac.getBean(Car.class);
        car.run();
    }
}
