import React from 'react';
import expert1 from '../../../../images/experts/expert-1.jpg'
import expert2 from '../../../../images/experts/expert-2.jpg'
import expert3 from '../../../../images/experts/expert-3.jpg'
import expert4 from '../../../../images/experts/expert-4.jpg'
import expert5 from '../../../../images/experts/expert-5.jpg'
import expert6 from '../../../../images/experts/expert-6.png'
import Expert from '../../Expert/Expert';

const experts = [
    { id: 1, name: 'Will Smith', img: expert1 },

    { id: 2, name: 'Will Smith', img: expert2 },
    { id: 3, name: 'Chris Rock', img: expert3 },
    { id: 4, name: 'Leonal Messi', img: expert4 },
    { id: 5, name: 'Stephan Johnson', img: expert5 },
    { id: 6, name: 'Heini abdali', img: expert6 }

]

const Experts = () => {
    return (
        <div className='container'>
            <h1 className='text-primary text-center'>Our Experts</h1>
            <div className='row'>
                {

                    experts.map((expert) => <Expert expert={expert} key={expert.id} />)

                }

            </div>

        </div>
    );
};

export default Experts;