import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { SaleItem, ProductItem, CategoriesItem, TopBar, LeftBarItem, Footer } from '../index';

const Blog2 = (props) => {

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
                                        Tại sao mèo sợ nước theo góc nhìn khoa học
                                    </h3>
                                    <img src="https://my-test-11.slatic.net/p/a89023ea8dc6d10d6f7d731726094cc5.jpg" alt="" />
                                    <p>
                                        Thức ăn choCác nhà khoa học cho rằng bản năng sợ nước của mèo bắt nguồn sâu xa từ tổ tiên của chúng. Mặc dù bằng chứng khảo cổ cho thấy tổ tiên sớm nhất của mèo có niên đại 9500 tuổi tại đảo Síp. Nhưng các nghiên cứu khẳng định rằng mèo nhà hiện nay phần lớn có nguồn gốc từ Châu Phi, đặc biệt là Ai Cập cổ đại. Chúng ta đều biết rằng khu vực này phần lớn là sa mạc, nắng nóng, điều kiện tiếp xúc với nước vô cùng hạn chế.

                                        Hơn nữa, ở một số thảo nguyên, khu vực có nước luôn tiềm tàng muôn vàn mối nguy hiểm sâu xa. Điển hình nhất là ở đó có các loài động vật ăn thịt, bản tính hung dữ như cá sấu và hà mã. Chính vì thế, tổ tiên của chúng càng có lý do để xa rời vùng nước hoang dã.

                                        Dù sau này, mèo nhà đã trải qua quá trình thuần hóa để có thể sinh sống cùng với con người. Tuy nhiên, nhiều nghiên cứu bộ gene của mèo nhà cho thấy rằng chúng chỉ là động vật bán thuần hóa. Nói cách khác, bộ gene hoang dã vẫn còn di truyền vô cùng sâu đậm trong cơ thể của mèo nhà ngày nay. Bản năng được thể hiện rõ nhất chính là kinh nghiệm sợ nước trước đây. chó nhỏ cần phải chọn mua thế nào cho hợp lý? Những giống chó nhỏ cần được chăm sóc và ăn theo chế độ dinh dưỡng đặc biệt để chúng có được sức khỏe tốt nhất. Thật không may, việc tìm kiếm những loại thức ăn chất lượng dành cho những giống chó nhỏ không phải điều dễ dàng. Nhưng dưới đây là một số những thông tin hữu ích có thể giúp bạn trong việc tìm kiếm loại thức ăn cho chó giống nhỏ phù hợp nhất.                                    </p>
                                    <br></br>

                                    <h3>
                                    Tuyến mùi hương trên da khiến mèo sợ nước
                                    </h3>
                                    <p>
                                    Mèo là loài có đặc tính lãnh thổ rất cao. Do đó, trên người chúng luôn có một tuyến mùi hương đặc biệt. Đó cũng chính là phương tiện chính để chúng giao tiếp với những con mèo khác. Đặc biệt hơn cả, vào mùa giao phối, mùi hương trên những con mèo lại phát tiết ra mạnh mẽ hơn bao giờ hết, để thành đặc điểm thu hút những cá thể khác giới. Tuyến mùi pheromone này là kích thích tố, hoạt động như nước hoa của chúng. Tuy nhiên, nếu tắm, các loại dầu gội, chất clo trong nước sinh hoạt sẽ bất hoạt pheromone ấy. Mèo sẽ mất đi sự thu hút, hấp dẫn của mình. Chính vì vậy, chúng dần trở nên có ác cảm với nước và bồn tắm.
                                    </p>

                                    <img src="https://66.media.tumblr.com/d2468c9356a07a8b0be3e3f69e2960c6/tumblr_p4kkm21RPL1wff0rao1_400.jpg" alt="" />
                                    <h3>
                                    Tuyến mùi hương trên da khiến mèo sợ nước
                                    </h3>
                                    <p> Mèo nhà là loài động vật bán hoang dã, do vậy bản năng tự nhiên săn mồi vẫn còn tồn tại khá nhiều trong cơ chế di truyền của bé. Họ nhà mèo luôn giữ bản thân cảnh giác với thế giới xung quanh, giữ bản thân luôn trong tư thế sẵn sàng, nhanh nhẹn. Duy trì trạng thái tốt nhất để có thể “Chạy ngay đi” bất cứ khi nào gặp nguy hiểm. Khi lớp áo khoác ngoài của mèo ướt sũng, cơ thể chúng sẽ trở nên nặng nề hơn trông thấy. Khiến mèo cảm thấy không thể di chuyển nhanh nhẹn như bình thường, chậm chạp hơn. Những chuyển động cơ thể càng khó khăn hơn khiến chúng rơi vào trạng thái đầy lo lắng và bất an. Vì thế, có thể giải thích tại sao mèo sợ nước như một cách để chúng bảo vệ sự an toàn của bản thân.

                                    Mặt khác, vì lông mèo có lớp chống nước bảo vệ bên ngoài. Nhưng lớp lông này một khi đã bị ướt lại rất khó để có thể khô ráo trở lại. Thân nhiệt mèo cao hơn con người rất nhiều. Nếu cơ thể chúng bị ẩm ướt thì rất dễ bị cảm lạnh. Cơ thể ẩm ướt trong một thời gian dài sẽ sinh ra rất nhiều vấn đề về sức khỏe khác. Điển hình có thể kể đến như một điều kiện thuận lợi cho vi khuẩn và nấm mốc sinh sôi phát triển mạnh mẽ. Làm tổn hại đến làn da gây viêm nhiễm cho bé. Tại sao mèo sợ nước? Chính là bản năng tự vệ, bảo vệ bản thân khỏi những tác nhân nguy hiểm từ môi trường.</p>
                                    <img src="https://www.puppytip.com/wp-content/uploads/2017/10/how-to-get-your-dog-to-eat-dog-food-again.jpg" alt="" />

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
                                                    <li><span>Thể loại:</span>Vệ sinh cho mèo</li>
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

export default Blog2;