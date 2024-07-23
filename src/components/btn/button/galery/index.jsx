import React from 'react';
import '../galery/index.css';

const Galery = () => {

    function flut(event) {
        let img = event.target;
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.marginLeft = '10px'
    }

    function qaytar() {
        const imags = document.querySelectorAll('.imgone');
        imags.forEach(img => {
            img.style.width = '150px';
            img.style.height = '150px';
            img.style.position = 'relative'
        img.style.marginLeft = '0px'
        });
    }

    return (
        <div>
            <div className="gimg">
                <div className="gimgdf">
                    <img onClick={flut}  src="https://picsum.photos/200/300" alt="" className='imgone'/>
                    <img onClick={flut} src="https://picsum.photos/id/237/200/300" alt="" className='imgone' />
                    <img onClick={flut} src="https://picsum.photos/200/300" alt="" className='imgone' />
                    <img onClick={flut} src="https://picsum.photos/200/300" alt="" className='imgone' /> <br />
                </div>
                <button onClick={qaytar}>oz holatiga qaytarish</button>
            </div>
        </div>
    );
}

export default Galery;
