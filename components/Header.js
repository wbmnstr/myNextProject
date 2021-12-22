import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span className='title'>WebDev</span> Newz</h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>

            {/* this is how we do jsx style in react component */}
            <style jsx>
                {`
                    .title{
                        color:red;
                    }
                `}
            </style>
        </div>
    )
}

export default Header
