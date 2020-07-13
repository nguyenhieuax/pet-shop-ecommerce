import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import { SaleItem, ProductItem, CategoriesItem, TopBar, LeftBarItem, Footer } from '../index';


const Blog1 = (props) => {
    return (
        <>
           
            <TopBar />
            <CategoriesItem history ={props.history} />
            <div>
                {/* Hello world */}

                <section className="blog-details spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-5 order-md-1 order-2">
                                <div className="blog__sidebar">
                                    <div className="blog__sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit"><span className="icon_search" /></button>
                                        </form>
                                    </div>
                                    <div className="blog__sidebar__item">
                                        <h4>Thể loại</h4>
                                        <ul>
                                            <li><a href="#">Chó</a></li>
                                            <li><a href="#">Mèo</a></li>
                                            <li><a href="#">Chim</a></li>
                                            <li><a href="#">Cá</a></li>
                                            <li><a href="#">Hamster</a></li>
                                        </ul>
                                    </div>
                                    {/* <div className="blog__sidebar__item">
                                        <h4>Recent News</h4>
                                        <div className="blog__sidebar__recent">
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-1.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-2.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                            <a href="#" className="blog__sidebar__recent__item">
                                                <div className="blog__sidebar__recent__item__pic">
                                                    <img src="img/blog/sidebar/sr-3.jpg" alt="" />
                                                </div>
                                                <div className="blog__sidebar__recent__item__text">
                                                    <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                                                    <span>MAR 05, 2019</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div> */}
                                    {/* <div className="blog__sidebar__item">
                                        <h4>Search By</h4>
                                        <div className="blog__sidebar__item__tags">
                                            <a href="#">Apple</a>
                                            <a href="#">Beauty</a>
                                            <a href="#">Vegetables</a>
                                            <a href="#">Fruit</a>
                                            <a href="#">Healthy Food</a>
                                            <a href="#">Lifestyle</a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-7 order-md-1 order-1">
                                <div className="blog__details__text">
                                    <h3>
                                        Cẩm nang chọn thức ăn cho chó nhỏ khoa học nhất
                                    </h3>
                                    <img src="https://www.puppytip.com/wp-content/uploads/2017/10/how-to-get-your-dog-to-eat-dog-food-again.jpg" alt="" />
                                    <p>
                                        Thức ăn cho chó nhỏ cần phải chọn mua thế nào cho hợp lý? Những giống chó nhỏ cần được chăm sóc và ăn theo chế độ dinh dưỡng đặc biệt để chúng có được sức khỏe tốt nhất. Thật không may, việc tìm kiếm những loại thức ăn chất lượng dành cho những giống chó nhỏ không phải điều dễ dàng. Nhưng dưới đây là một số những thông tin hữu ích có thể giúp bạn trong việc tìm kiếm loại thức ăn cho chó giống nhỏ phù hợp nhất.
                                    </p>
                                    <br></br>

                                    <h3>
                                        Vì sao thức ăn cho chó nhỏ cần được chọn riêng?
                                    </h3>
                                    <p>
                                        Những giống chó nhỏ có rất nhiều điểm khác những giống chó lớn, trước tiên là về nhu cầu dinh dưỡng của chúng. Mặc dù có kích thước nhỏ, những giống chó nhỏ và đồ chơi cần nhiều calo/0,5kg hơn so với những giống chó lớn. Tỷ lệ trao đổi chất cao ảnh hưởng tới nhu cầu dinh dưỡng của những giống chó nhỏ khi còn bé. Còn khi về già, chế độ ăn uống hợp lý và cân bằng có thể cải thiện những vấn đề về sức khỏe của chúng.
                                    </p>
                                    <img src="https://www.dogster.com/wp-content/uploads/2018/04/Lab-dog-eats-cucumbers-carrots-lettuce-salad.jpg" alt="" />
                                    <p> Nhìn chung, loài chó cần một loạt các chất dinh dưỡng, vitamin và khoáng chất thiết yếu. Trái với hầu hết suy nghĩ của con người, chó không phải là loài động vật ăn thịt thuần túy. Chó nhà cũng cần ăn ngũ cốc, trái cây và rau quả cùng thịt để có được một chế độ ăn uống đầy đủ và cân bằng. Vì vậy, nhiều người thích cho chó ăn theo những loại thức ăn đóng gói trên thị trường. Hầu hết những loại thức ăn này đều có giá cả phải chăng, tiện lợi và chứa những chất dinh dưỡng chó cần để giữ gìn sức khỏe. Vì rất ít chủ nuôi là chuyên gia dinh dưỡng nên cho chó ăn thức ăn khô hoặc thức ăn đóng hộp sẽ giúp chúng cân bằng nhu cầu dinh dưỡng.
                                        Một số giống chó cần những chế độ dinh dưỡng riêng. Hãy thảo luận với bác sĩ thú y để xem bạn cần lưu ý những rủi ro nào có thể xảy ra khi cho chó ăn theo chế độ dinh dưỡng riêng dựa trên tuổi của chó hoặc những vấn đề sức khỏe mà chúng đang mắc phải.</p>
                                </div>
                                <div className="blog__details__content">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="blog__details__author">
                                                <div className="blog__details__author__pic">
                                                    <img src="img/blog/details/details-author.jpg" alt="" />
                                                </div>
                                                <div className="blog__details__author__text">
                                                    <h6>Admin</h6>
                                                    <span>Admin</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="blog__details__widget">
                                                <ul>
                                                    <li><span>Thể loại:</span>Thức ăn cho chó</li>
                                                    {/* <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li> */}
                                                </ul>
                                                <div className="blog__details__social">
                                                    <a href="#"><i className="fa fa-facebook" /></a>
                                                    <a href="#"><i className="fa fa-twitter" /></a>
                                                    <a href="#"><i className="fa fa-google-plus" /></a>
                                                    <a href="#"><i className="fa fa-linkedin" /></a>
                                                    <a href="#"><i className="fa fa-envelope" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />

        </>
    )

}

export default Blog1;