import React, { Fragment } from 'react';
import { Link} from 'react-router-dom';

const products = [
  {
    id: 1,
    image: 'assets/images/med(1).jpeg',
    title: 'LOCOID 0.1% OINT, 30 GM',
    price: 'EP.15',
  },
  {
    id: 2,
    image: 'assets/images/med(2).jpeg',
    title: 'DUETTO SKIN REPAIR CREAM 50 GM',
    price: 'EP.16',
  },
  {
    id: 3,
    image: 'assets/images/med(3).jpeg',
    title: 'COXICAM 15MG TAB,10\'S',
    price: 'EP.20',
  },
  {
    id: 4,
    image: 'assets/images/med(4).jpeg',
    title: 'ايرفاست 5 مجم اقراص مضغ 30 قرص AIRFAST 5 MG CHEWABLE TAB',
    price: 'EP.150',
  },
  {
    id: 5,
    image: 'assets/images/med(5).jpg',
    title: 'زيلوكين 10 % بخاخ 50 مل XYLOCAINE 10% SPRAY, 50ML',
    price: 'EP.67',
  },
  {
    id: 6,
    image: 'assets/images/med(6).jpg',
    title: 'زستريل 20 مجم 28 قرص ZESTRIL 20MG TAB, 28"s"',
    price: 'EP.123',
  },
  {
    id: 7,
    image: 'assets/images/vi(1).jpg',
    title: 'نيوكاربون 30 كبسوله MARNYS NEOCARBON CAP, 30 s',
    price: 'EP.150',
  },
  {
    id: 8,
    image: 'assets/images/vi(2).jpg',
    title: 'ويلمان صحة وحيوية وطاقة 30 كبسولة WELLMAN CAP,30',
    price: 'EP.16o',
  },
  {
    id: 9,
    image: 'assets/images/vi(3).jpg',
    title: 'CO-Q10 100MGCAP,30',
    price: 'EP.20',
  },
  {
    id: 10,
    image: 'assets/images/vi(4).jpg',
    title: ' نيوروروبين فورت 20 قرص NEURORUBINE-FORTE TAB, 20',
    price: 'EP.150',
  },
  {
    id: 11,
    image: 'assets/images/vi(5).jpg',
    title: 'نيوروبيون 30 قرص NEUROBION TAB, 20 s ',
    price: 'EP.67',
  },
  {
    id: 12,
    image: 'assets/images/vi(6).jpg',
    title: 'نيورو-بي 20 قرص NEURO - B TAB, 20 "S"',
    price: 'EP.123',
  },
  {
    id: 13,
    image: 'assets/images/NTjp3Nlzra79FrX5XMN7coM9UdTm9aOkgo7Yv92a.png',
    title: 'BABY LIFE PANTS XLARGE BOX (2BAG*36)',
    price: 'EP.300',
  },
  {
    id: 14,
    image: 'assets/images/eS0v4oIzXQj1VpQcXuYSOGJVoinCKzizHara2Ueh.jpg',
    title: 'بيجون منظف لأنف الأطفال , PIGEON NOSE CLEANER SUCTION SYRINGE 336',
    price: 'EP.46',
  },
  {
    id: 15,
    image: 'assets/images/4NUWkqyxxiCNFcb0Zuo0r4TDyOY2QPUumeitEbyk.jpg',
    title: 'سانيتا شارم اعواد اذن امنه للاطفال 50حبه , SANITA CHARM SAFETY BABY EAR BUDS 24X50"S W503"',
    price: 'EP.55',
  },
  {
    id: 16,
    image: 'assets/images/Jvk4axVwFhX9S0T4jGBddpvprJsRRf6esfeuRZLp.jpg',
    title: 'بيودرما-فوتوديرم واقي للبشرة (SPF100) 100 مل , BIODERMA PHOTODERM MAX MILK, 100 ML 30505',
    price: 'EP.200',
  },
  {
    id: 17,
    image: 'assets/images/tCjWU508EmJb3rdoMnaZUYzNZ2ZZZTxD4ugAalx5.jpg',
    title: 'هيد&شولدرز عود 4*6*400مل , H&S OUD 24*400ML',
    price: 'EP.67',
  },
  {
    id:18,
    image: 'assets/images/dgel6TwmjQ4Auogg1rd5hIgEkD3sfHtXG899RQrI.jpg',
    title: 'كوليستون صبغة شعر بني غزالي كيت 7/7 , KOLESTON KIT 7/7 DEER BROWN',
    price: 'EP.123',
  },
  
  // Add more products as needed
];

function Products({ addToCart }) {
  
  return (
    <Fragment>
      <div className="breadcrumbs">
		<div className="container" >
			<ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s" style={{backgroundColor: "white"}}>
				<li>
          <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span>Home</Link>
        </li>
				<li className="active">Products</li>
			</ol>
		</div>
	</div>
      <section>
        <div className="text-center">
          <h1 id="ME">The pharmacy is in front of you</h1>
          <div className="product row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <img src={product.image} className="card-img-top photo" alt={product.title} />
                    <h5 className="card-title price">{product.price}</h5>
                    <p className="card-text">{product.title}</p>
                    <ion-icon
                      name="cart"
                      className="add-cart"
                      size='large'
                      onClick={() => addToCart(product)}
                    ></ion-icon>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Products;
