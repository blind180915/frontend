package kr.or.connect.mvcexam.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"kr.or.connect.mvcexam.controller" })
// 중괄호를 사용하여 여러개의 basePackage를 등록할 수 있다.
// basePackages는 등록해줘야한다 어느 패키지를 찾아야 할지 몰라서 동작이 제대로 안 될 수 있다.
public class WebMvcContextConfiguration extends WebMvcConfigurerAdapter {
	// 실제 요청이 들어올 때 /js/**, /img/**, /css/** 로 시작하는 url요청을 루트 디렉토리 아래에 각각에 디렉토리에 알맞게 사용할 수 있게 해준다. 
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/assets/**").addResourceLocations("classpath:/META-INF/resources/webjars/").setCachePeriod(31556926);
        registry.addResourceHandler("/css/**").addResourceLocations("/css/").setCachePeriod(31556926);
        registry.addResourceHandler("/img/**").addResourceLocations("/img/").setCachePeriod(31556926);
        registry.addResourceHandler("/js/**").addResourceLocations("/js/").setCachePeriod(31556926);
    }
 
    // default servlet handler를 사용하게 합니다.
	// 매핑 정보가 없는 URL 요청은 Spring의 DefaultServletHttpRequestHandler가 처리하도록 해준다. Spring의 DefaultServletHttpRequestHandler는 
	// WAS의 DefaultServlet에게 해당 일을 넘기고 WAS는 DefaultServlet이 static 한 자원을 읽어서 보여준다.
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
   
    // view name은 ViewResolver라는 객체를 이용해 찾는다. 실제 "main"이라는 이름만 가지고서는 뷰 정보를 찾아낼 수가 없고 
    // 뷰 정보는 getInternalResourceViewResolver 라는 메서드에서 설정된 형태로 뷰를 사용하게 된다.
    @Override
    public void addViewControllers(final ViewControllerRegistry registry) {
    		System.out.println("addViewControllers가 호출됩니다. ");
        registry.addViewController("/").setViewName("main");
    }
    
    @Bean
    public InternalResourceViewResolver getInternalResourceViewResolver() {
        InternalResourceViewResolver resolver = new InternalResourceViewResolver();
        resolver.setPrefix("/WEB-INF/views/");
        resolver.setSuffix(".jsp");
        return resolver;
    }
}
