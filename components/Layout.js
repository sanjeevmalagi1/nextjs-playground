import Navar from './Navbar';

const Layout = (props) => {
  return (
    <div>
      <Navar />
     <div className="container mx-auto">
        {props.children}
     </div>
    </div>
  );
};


export default Layout;
