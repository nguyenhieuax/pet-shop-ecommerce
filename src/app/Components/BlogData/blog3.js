import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { SaleItem, ProductItem, CategoriesItem, TopBar, LeftBarItem, Footer } from '../index';

const Blog3 = () => {

    return (
        <>
            <TopBar />
            <CategoriesItem />
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
                                    Cách làm pate cho mèo thật ngon tại nhà
                                    </h3>
                                    <img src="https://qph.fs.quoracdn.net/main-qimg-d00994790af4f0cff8940ff550f420f0" alt="" />
                                    <p>
                                    Cách làm pate cho mèo sao cho ngon, hợp khẩu vị cho mèo như thế nào? Chắc hẳn khi bạn mới nuôi mèo, bạn luôn muốn dành thời gian nhiều để chăm sóc mèo cưng của mình. Pate mang đến một trải nghiệm thức ăn với hương vị mới mẻ và thú vị hơn trong mỗi bữa ăn của mèo </p>
                                    <br></br>

                                    <h3>
                                    Pate tươi cho mèo là gì?
                                    </h3>
                                    <p>
                                    Pate tươi là một món ăn vô cùng đơn giản, bạn có thể chế biến ngay tại nhà và lưu trữ lâu dài. Nhắc về cách làm pate tươi, điều quan trọng cần lưu ý chính là nguyên liệu và khâu sơ chế phải đảm bảo độ tươi và an toàn cho mèo cưng. Sở dĩ người ta thường học cách làm pate cho mèo bởi vì hương vị nhà làm bao giờ cũng ngon hơn đóng hộp. Các loại đạm thịt được nghiền nhuyễn bằng máy xay. Giúp bé mèo nhà ta dễ ăn và dễ tiêu hóa hơn. </p>

                                    <br>
                                    </br>
                                    <p>
                                    Với kết cấu đặc, tương đối sệt, hương vị thơm ngon, giúp bạn có thể kết hợp đa dạng, tạo thành nhiều món ăn khác nhau cho mèo cưng. Như cơm trộn pate, hạt khô trộn pate tươi để tăng hương vị món ăn cho mèo. Sử dụng pate tươi sẽ giúp hạn chế được sự ảnh hưởng tiêu cực của một số chất phụ gia thực phẩm. Mang đến giá trị dinh dưỡng tối ưu nhất từ những nguyên liệu tươi ngon, bổ dưỡng. Và hơn hết, các ông bố bà mẹ lại có dịp trổ tài nấu nướng, kết nối tình cảm với các bé yêu qua đồ ăn.  
                                    </p>
                                    <img src="https://petacy.com/wp-content/uploads/2020/02/thuc-an-uot-cho-meo.jpg" alt="" />
                                    <h3>
                                    Cách làm pate gà cho mèo

                                    </h3>
                                    <p> Cách nấu pate cho mèo không hề khó như bạn nghĩ đâu. Mà ngược lại, còn vô cùng dễ dàng. Chỉ cần bạn chuẩn bị hoàn chỉnh, sơ chế đầy đủ các nguyên liệu sạch sẽ. Trong vỏn vẹn 5 phút, các cách nấu pate dưới đây sẽ giúp bạn hoàn thành bữa ăn bổ dưỡng cho mèo cưng của mình. </p>
                                    <img src="https://www.thehappycatsite.com/wp-content/uploads/2018/06/best-fussy-cat-food-header.jpg" alt="" />

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
                                                    <li><span>Thể loại:</span>Thức ăn cho mèo</li>
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

export default Blog3;