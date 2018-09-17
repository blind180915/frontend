package kr.or.connect.diexam01;

public class UserBean {
	 //필드는 private한다.
    private String name;
    private int age;
    private boolean male;
    
    //기본생성자를 반드시 가지고 있어야 한다.
    public UserBean() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    public UserBean(String name, int age, boolean male) {
        super();
        this.name = name;
        this.age = age;
        this.male = male;
    }
    
    // setter, getter메소드는 프로퍼티라고 한다.
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }
    public boolean isMale() {
        return male;
    }
    public void setMale(boolean male) {
        this.male = male;
    }
}
