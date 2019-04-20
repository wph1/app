import com.geekcattle.Application;
import com.geekcattle.mapper.console.SwitchMapper;
import com.geekcattle.mapper.switches.FlowTableMapper;
import com.geekcattle.mapper.switches.SwitchesNewMapper;
import com.geekcattle.service.console.SwitchService;
import junit.framework.TestCase;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import redis.clients.jedis.JedisPool;

import java.util.List;
import java.util.Map;


@RunWith(SpringJUnit4ClassRunner.class) // SpringJUnit支持，由此引入Spring-Test框架支持！
@SpringBootTest(classes = Application.class)
@WebAppConfiguration // 由于是Web项目，Junit需要模拟ServletContext，因此我们需要给我们的测试类加上@WebAppConfiguration。
public class TestApp extends TestCase {

    private static Logger logger = LoggerFactory.getLogger(TestApp.class);

    @Autowired
    JedisPool jedisPool;
    @Autowired
    private SwitchesNewMapper switchesNewMapper;
    @Autowired
    private SwitchService switchService;
    @Autowired
    private SwitchMapper sMapper;
    @Autowired
    RedisTemplate<String, String> redisTemplate;

    @Autowired
    private FlowTableMapper flowTableMapper;

    @Test
    public void testRedis(){
//        redisTemplate.boundValueOps("geekcattle").set("df1111111111111");
        System.out.println("拿去redisd的值");
        System.out.println(redisTemplate.opsForValue().get("shiro-redis-session:be01d223-9a14-4087-810a-3b86829c7ae7"));
    }
    public static void main(String[] args) {
        logger.debug("debug");
        logger.info("info");
        logger.warn("warn");
        logger.error("error");
    }
    //测试添加
    @Test
    public  void testSelect() {

//        sMapper.deleteAll();
//        switchesNewMapper.deleteAll();

        List<Map<String, Object>> maps = flowTableMapper.selectFlowBySwitchesId("1");
        System.out.println(maps.get(0).get("id"));



    }


}
