package kr.or.connect.diexam01;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
	@Autowired
    public Engine v8;
    
    public Car() {
        System.out.println("Car 생성자");
    }
    
    public void setEngine(Engine e) {
        this.v8 = e;
    }
    
    public void run() {
        System.out.println("엔진을 이용하여 달립니다.");
        v8.exec();
    }
    
    // DI를 하지 않고 실행할 경
    public static void main(String[] args) {
        Engine e = new Engine();
        Car c = new Car();
        c.setEngine(e);
        c.run();
    }
}
