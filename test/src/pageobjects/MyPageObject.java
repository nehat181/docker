package pageobjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.provar.core.testapi.annotations.*;

@Page( title="MyPageObject"                                
     , summary=""
     , relativeUrl=""
     , connection="Admin"
     )             
public class MyPageObject {

	@LinkType()
	@FindBy(xpath = "//a[normalize-space(.)='Cart 0']")
	public WebElement cart0;
	@TextType()
	@FindBy(xpath = "//h2[normalize-space(.)='Your Amazon cart is empty']")
	public WebElement msg;
			
}
