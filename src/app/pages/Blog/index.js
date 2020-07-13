import React from 'react'
import { TopBar, CategoriesBar, CategoriesItem, Loader, Footer } from '../../Components';
import { Switch, Route, Link } from "react-router-dom";

export default function Blog(props) {
    return (
        <div>
            <TopBar history={props.history} />
            <CategoriesItem history ={props.history} />

            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-5">
                            <div className="blog__sidebar">
                                {/* <div className="blog__sidebar__search">
                                    <form action="#">
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit"><span className="icon_search" /></button>
                                    </form>
                                </div> */}
                                <div className="blog__sidebar__item">
                                    <h4>Categories</h4>
                                    <ul>
                                        <li><a href="#">Chó</a></li>
                                        <li><a href="#">Mèo (20)</a></li>
                                        <li><a href="#">Chim (5)</a></li>
                                        <li><a href="#">Cá (9)</a></li>
                                        <li><a href="#">Hamster (10)</a></li>
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
                        <div className="col-lg-8 col-md-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img style={{ height: 240 }} src="https://www.puppytip.com/wp-content/uploads/2017/10/how-to-get-your-dog-to-eat-dog-food-again.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o" /> 29/06/2020</li>
                                                <li><i className="fa fa-comment-o" /> 0</li>
                                            </ul>
                                            <h5><Link to ='/blog-one'>Cẩm nang chọn thức ăn cho chó nhỏ khoa học nhất</Link></h5>
                                            <p>Thức ăn cho chó nhỏ cần phải chọn mua thế nào cho hợp lý? Những giống chó nhỏ cần được chăm sóc và ăn theo chế độ dinh dưỡng đặc biệt để chúng có được sức khỏe tốt nhất
                  quaerat </p>
                                            <Link to ='/blog-one' className="blog__btn">XEM THÊM <span className="arrow_right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img style={{ height: 240 }} src="https://hoiyeumeo.vn/public/upload/images/figopetinsurance.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o" /> 27/06/2020</li>
                                                <li><i className="fa fa-comment-o" /> 0</li>
                                            </ul>
                                            <h5><Link to ='/blog-two'>Vì sao mèo sợ nước?</Link></h5>
                                            <p>                      Tại sao mèo sợ nước? Nghe qua đây có vẻ là một câu hỏi mà hiển nhiên tất cả chúng ta ai cũng đều có câu trả lời. Bản năng

                   </p>
                                            <Link to ='/blog-two' className="blog__btn">XEM THÊM <span className="arrow_right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img style={{ height: 240 }} src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/people_foods_cats_can_eat_slideshow/thinkstock_rf_photo_of_cat_with_fish_plate.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o" /> 26/06/2020</li>
                                                <li><i className="fa fa-comment-o" /> 0</li>
                                            </ul>
                                            
                  <h5><Link to ='/blog-three'>Cách làm pate cho mèo thật ngon tại nhà</Link></h5>
                                            <p>Cách làm pate cho mèo sao cho ngon, hợp khẩu vị cho mèo như thế nào? Chắc hẳn khi bạn mới nuôi mèo, bạn luôn muốn dành thời gian nhiều để chăm sóc mèo cưng của mình</p>
                                            <Link to ='/blog-three' className="blog__btn">XEM THÊM <span className="arrow_right" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="blog__item">
                                        <div className="blog__item__pic">
                                            <img style={{ height: 240 }} src="https://www.thesprucepets.com/thmb/FOLwbR72UrUpF9sZ45RYKzgO8dg=/3072x2034/filters:fill(auto,1)/yellow-tang-fish-508304367-5c3d2790c9e77c000117dcf2.jpg" alt="" />
                                        </div>
                                        <div className="blog__item__text">
                                            <ul>
                                                <li><i className="fa fa-calendar-o" /> 23/06/2020</li>
                                                <li><i className="fa fa-comment-o" /> 0</li>
                                            </ul>
                                            <h5><Link >Cách thay nước cho cá?</Link></h5>
                                            <p>Thay nước cho cá là một biện pháp vệ sinh vô cùng quan trọng</p>
                                            <a href="#" className="blog__btn">XEM THÊM <span className="arrow_right" /></a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-12">
                                    {/* <div className="product__pagination blog__pagination">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#"><i className="fa fa-long-arrow-right" /></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}
