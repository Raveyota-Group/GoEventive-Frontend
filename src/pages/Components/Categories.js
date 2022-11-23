import React from 'react';
import style from './Categories.module.css'
const Categories = () => {
    return (
        <div className={style.Categories}>
            <div className={style.Categoris_head}>
                <h1>Categories</h1>
                <p>
                    soemthing about categories into 50 or less then 50 words.
                </p>
            </div>
            <div className={style.categories_body}>
                <div className={style.img_box}>
                    <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt='Not Find'/>
                    <h5 className={style.nameOfCategoris}>Beach</h5>
                </div>
                <div className={style.img_box}>
                    <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt='Not Find'/>
                    <h5 className={style.nameOfCategoris}>Beach</h5>
                </div>

                <div className={style.img_box}>
                    <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt='Not Find'/>
                    <h5 className={style.nameOfCategoris}>Beach</h5>
                </div>

                <div className={style.img_box}>
                    <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt='Not Find'/>
                    <h5 className={style.nameOfCategoris}>Beach</h5>
                </div>

                <div className={style.img_box}>
                    <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt='Not Find'/>
                    <h5 className={style.nameOfCategoris}>Beach</h5>
                </div>

                <div className={style.img_box}>
                    <img src="https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2018-09/herobanner-events.jpg?itok=hI-hYGG6" alt='Not Find'/>
                    <h5 className={style.nameOfCategoris}>Beach</h5>
                </div>

            </div>
        </div>
    );
};

export default Categories;