import React from 'react'
import "./Container.scss"
import Side from '../Side/Side'
import fake from '../../Images/fake.png'
import fake2 from '../../Images/fake2.png'

import { doc, getDocs } from "firebase/firestore";
import { firebase, firestore } from "../../firebase/FirebaseConfig"
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import { collection } from 'firebase/firestore';

function Container() {


    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            let box = []
            let FirebaseData = await getDocs(collection(firestore, "blogs"))
            FirebaseData.forEach(doc => {
                return box.push({ id: doc.id, data: doc.data() })
            })
            setData(box)
        }
        getData()

    }, [])

    return (
        <div className='container'>
            <h1 className='zagalovok'>Смартфоны в Ташкенте</h1>
            <div className="side">
                <Side />
            </div>
            <div className="products">
                <img src={fake} className="fake" alt="" />
                <img src={fake2} className="fake2" alt="" />
                <div className="blog_cover">
                    {
                        data.map(blog => (
                            <div key={blog.id} className="blogs">
                                <img width='200px' src={blog.data.imglink} alt="" />
                                <div className="text">
                                    <h1>{blog.data.title}</h1>
                                    <h3>{blog.data.blognumber}</h3>
                                    <span>* * * * *</span>
                                    <button>В корзину</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Container
