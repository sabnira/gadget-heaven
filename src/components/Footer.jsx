

const Footer = () => {
    return (
        <>
            <div className="text-center py-16">
                <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                <p className="text-gray-500 pt-2">Leading the way in cutting-edge technology and innovation.</p>
            

            <div class="divider"></div>
            
            <footer className="footer sm:footer-horizontal">
                <nav className="md:mx-auto">
                    <h6 className="footer-title text-black opacity-100">Services</h6>
                    <a className="link link-hover text-gray-500">Product Support</a>
                    <a className="link link-hover text-gray-500">Order Tracking</a>
                    <a className="link link-hover text-gray-500">Shipping & Delivery</a>
                    <a className="link link-hover text-gray-500">Returns</a>
                </nav>
                <nav className="md:mx-auto">
                    <h6 className="footer-title text-black opacity-100">Company</h6>
                    <a className="link link-hover text-gray-500">About us</a>
                    <a className="link link-hover text-gray-500">Careers</a>
                    <a className="link link-hover text-gray-500">Contact</a>
                </nav>
                <nav className="md:mx-auto">
                    <h6 className="footer-title text-black opacity-100">Legal</h6>
                    <a className="link link-hover text-gray-500">Terms of Service</a>
                    <a className="link link-hover text-gray-500">Privacy policy</a>
                    <a className="link link-hover text-gray-500">Cookie policy</a>
                </nav>
            </footer>
            </div>
        </>

    );
};

export default Footer;