import { Link } from 'react-router-dom';
import BannerImg from '../../assets/img/banner.jpg';
import Videos from '../../components/Videos/Videos';
import './Home.scss'

const Home = ({ videos }) => {

    return (
        <div>
            <div className="banner" style={{ backgroundImage: `url(${BannerImg})` }}>

            </div>
            <Videos videos={videos} count={12} heading="Latest Videos" />
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}><Link className="btn btn-primary" to='/videos'>See all</Link></div>
        </div>
    );
};

export default Home;