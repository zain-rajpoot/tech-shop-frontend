// Go To Top Btn
let Go_To_Top = document.getElementById('Go_To_Top');
window.onscroll = function () { Top() }
function Top() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        Go_To_Top.style.opacity = '1';
    } else {
        Go_To_Top.style.opacity = '0';
    }
}

function GoToTop() {
    document.body.scrollTop = 0;  // for safari
    document.documentElement.scrollTop = 0; // for chrome or other browsers..
}


// ALL DATA
// android_smart_tv_box
let android_smart_tv_box = [
    {
        name: 'MXQ PRO 4K TV BOX',
        img: '../Pics/SMART_TV_BOX/miboxs.jpg',
        del: 7000,
        price: 6250,
        saleOff: 10,
    },
    {
        name: 'Mi Box Android S',
        img: '../Pics/SMART_TV_BOX/mitvstick.jpg',
        del: 12500,
        price: 10500,
        saleOff: 20,
    },
    {
        name: 'Mi TV Stick 1gb',
        img: '../Pics/SMART_TV_BOX/mxqpro.jpg',
        price: 8900,
        del: 0,
        saleOff: 0,
    },
    {
        name: 'Smart Box X96Q',
        img: '../Pics/SMART_TV_BOX/smartbox.jpeg',
        del: 6000,
        price: 5000,
        saleOff: 10,
    },
    {
        name: 'T9 4K Android smart',
        img: '../Pics/SMART_TV_BOX/smartbox.jpg',
        del: 8500,
        price: 8000,
        saleOff: 5,
    },
    {
        name: 'Smart Box Mxq',
        img: '../Pics/SMART_TV_BOX/t94k.jpg',
        del: 4250,
        price: 3500,
        saleOff: 15,
    },
]

android_smart_tv_box.map((i, j) => {
    document.getElementById('smart_TV').innerHTML += `<div class="product" key=${j}>
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});


// AIR MOUSE
let air_mouse = [
    {
        name: 'Wechip W1 Wireless',
        img: '../Pics/AIR_MOUSE/airmouseg10.jpg',
        del: 3500,
        price: 27500,
        saleOff: 10,
    },
    {
        name: 'Air MOUSE gs10',
        img: '../Pics/AIR_MOUSE/mousec120.jpg',
        del: 2000,
        price: 1500,
        saleOff: 15,
    },
    {
        name: 'Air MOUSE mx3',
        img: '../Pics/AIR_MOUSE/mousejs6.jpg',
        price: 1400,
        del: 1900,
        saleOff: 18,
    },
    {
        name: 'Air MOUSE c120',
        img: '../Pics/AIR_MOUSE/mousemx3.jpg',
        del: 0,
        price: 6000,
        saleOff: 0,
    },
    {
        name: 'Air MOUSE js6/t6',
        img: '../Pics/AIR_MOUSE/touchpad.jpg',
        del: 8500,
        price: 8000,
        saleOff: 13,
    },
    {
        name: 'Air MOUSE pad rf',
        img: '../Pics/AIR_MOUSE/wichipw1.jpg',
        del: 2350,
        price: 1300,
        saleOff: 25,
    },
]

air_mouse.map((i, j) => {
    document.getElementById('Air_mouse').innerHTML += `<div class="product">
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});

// BLUTOOTH DEVICE
let B_device = [
    {
        name: 'Joyroom Airpods 3',
        img: '../Pics/BLUETOOTH_DEVICES/airpod3.jfif',
        del: 4900,
        price: 3900,
        saleOff: 30,
    },
    {
        name: 'Branded air pods pr',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice1.jpg',
        del: 2400,
        price: 1800,
        saleOff: 13,
    },
    {
        name: 'Haylow w1 Airbuds',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice2.jpg',
        price: 1499,
        del: 1600,
        saleOff: 18,
    },
    {
        name: 'redmi buds 3 lite',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice3.jfif',
        del: 0,
        price: 2000,
        saleOff: 0,
    },
    {
        name: 'haylou mori pods pn',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice4.jpg',
        del: 8900,
        price: 7800,
        saleOff: 21,
    },
    {
        name: 'haylou gt 2022',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice5.jpg',
        del: 2359,
        price: 1900,
        saleOff: 17,
    },
    {
        name: 'lenovo xt92',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice6.jpg',
        del: 1350,
        price: 1300,
        saleOff: 5,
    },
    {
        name: 'branded airbuds prd',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice7.jpg',
        del: 1750,
        price: 1500,
        saleOff: 10,
    },
    {
        name: 'lenovo x12',
        img: '../Pics/BLUETOOTH_DEVICES/Bdevice8.jpg',
        del: 2350,
        price: 1900,
        saleOff: 15,
    },
]

B_device.map((i, j) => {
    document.getElementById('Blu_device').innerHTML += `<div class="product">
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});



// CAMERA SECURITY
let camera = [
    {
        name: 'Yoosee SPEED-X PTZ',
        img: '../Pics/camera/camera1.jpg',
        del: 8900,
        price: 5900,
        saleOff: 30,
    },
    {
        name: 'mi 360 original',
        img: '../Pics/camera/camera2.jpg',
        del: 2400,
        price: 1800,
        saleOff: 13,
    },
    {
        name: 'sq13 mini camera',
        img: '../Pics/camera/camera3.jpeg',
        price: 1499,
        del: 1600,
        saleOff: 18,
    },
    {
        name: 'wifi flexible',
        img: '../Pics/camera/camera4.jpeg',
        del: 0,
        price: 2000,
        saleOff: 0,
    },
    {
        name: 'usb ganooze x',
        img: '../Pics/camera/camera5.jpeg',
        del: 8900,
        price: 7800,
        saleOff: 21,
    },
    {
        name: 'yoose color night',
        img: '../Pics/camera/camera6.jpeg',
        del: 2359,
        price: 1900,
        saleOff: 17,
    },
    {
        name: 'a9 1080p magnite hd',
        img: '../Pics/camera/camera7.jpg',
        del: 1350,
        price: 1300,
        saleOff: 5,
    },
    {
        name: 'ir mini wifi',
        img: '../Pics/camera/camera8.jpeg',
        del: 1750,
        price: 1500,
        saleOff: 10,
    },
]

camera.map((i, j) => {
    document.getElementById('Cameras').innerHTML += `<div class="product">
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});

// PROJECTORS
let projectors = [
    {
        name: 'Unic y6 projectors',
        img: '../Pics/projector/projectors.jfif',
        del: 24999,
        price: 21999,
        saleOff: 15,
    }
]

projectors.map((i, j) => {
    document.getElementById('projectors').innerHTML += `<div class="product">
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});


// misclaneous
let MISCELLANEOUS = [
    {
        name: 'K35 Wireless Micro',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS1.jpg',
        del: 5000,
        price: 25000,
        saleOff: 50,
    },

    {
        name: 'k9 dual wireless',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS2.jfif',
        del: 5000,
        price: 3999,
        saleOff: 20,
    },

    {
        name: 'q8 microphone wireless',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS3.jpg',
        del: 35000,
        price: 24999,
        saleOff: 25,
    },

    {
        name: 'boya by-mm1',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS4.jpg',
        del: 5000,
        price: 4500,
        saleOff: 15,
    },

    {
        name: '4k m100 anycast hd',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS5.jpg',
        del: 4000,
        price: 3350,
        saleOff: 10,
    },

    {
        name: 'gaming mouse',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS6.jpg',
        del: 4500,
        price: 44999,
        saleOff: 1,
    },

    {
        name: 'x box 360 wireless',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS7.jpg',
        del: 4500,
        price: 3499,
        saleOff: 10,
    },

    {
        name: 'ps4 remote',
        img: '../Pics/MISCELLANEOUS/MISCELLANEOUS8.jpg',
        del: 4500,
        price: 32500,
        saleOff: 20,
    },

]

MISCELLANEOUS.map((i, j) => {
    document.getElementById('MISCELLANEOUS').innerHTML += `<div class="product">
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});



// MOBILE LAPTOP ACCESSORIES
let M_L_a = [
    {
        name: 'digital watch',
        img: '../Pics/mobile_laptop_accesories/MLA1.jpg',
        del: 4000,
        price: 3000,
        saleOff: 10,
    },
    {
        name: 'digital watch m10',
        img: '../Pics/mobile_laptop_accesories/MLA2.jpg',
        del: 2000,
        price: 1500,
        saleOff: 20,
    },
    {
        name: 'apple watch',
        img: '../Pics/mobile_laptop_accesories/MLA4.jpg',
        del: 5000,
        price: 4500,
        saleOff: 16,
    },
    {
        name: 'apple gen 8',
        img: '../Pics/mobile_laptop_accesories/MLA5.jpg',
        del: 2999,
        price: 2599,
        saleOff: 21,
    },
    {
        name: 'mac book',
        img: '../Pics/mobile_laptop_accesories/MLA6.jpg',
        del: 280000,
        price: 27000,
        saleOff: 10,
    },
    {
        name: 'wireless keboard',
        img: '../Pics/mobile_laptop_accesories/MLA7.jpeg',
        del: 12000,
        price: 10000,
        saleOff: 20,
    },
    {
        name: 'wireless mouse',
        img: '../Pics/mobile_laptop_accesories/MLA8.jpg',
        del: 10000,
        price: 1800,
        saleOff: 12,
    },
    {
        name: 'mouse m3',
        img: '../Pics/mobile_laptop_accesories/MLA9.jpg',
        del: 1500,
        price: 1200,
        saleOff: 10,
    },
    {
        name: 'wireless router',
        img: '../Pics/mobile_laptop_accesories/MLA10.jpg',
        del: 4500,
        price: 3500,
        saleOff: 15,
    },
    {
        name: 'router 4 network',
        img: '../Pics/mobile_laptop_accesories/MLA11.jpg',
        del: 9500,
        price: 7999,
        saleOff: 20,
    },
    {
        name: 'laptop charger',
        img: '../Pics/mobile_laptop_accesories/MLA12.jpg',
        del: 1200,
        price: 1000,
        saleOff: 12,
    },
    {
        name: 'hp charger',
        img: '../Pics/mobile_laptop_accesories/MLA13.jpg',
        del: 2000,
        price: 1600,
        saleOff: 15,
    },
    {
        name: 'mac charger',
        img: '../Pics/mobile_laptop_accesories/MLA14.jpg',
        del: 4500,
        price: 4000,
        saleOff: 8,
    },
    {
        name: 'apple charge pin',
        img: '../Pics/mobile_laptop_accesories/MLA15.jpg',
        del: 2000,
        price: 1600,
        saleOff: 10,
    },
    {
        name: 'del wire charger',
        img: '../Pics/mobile_laptop_accesories/MLA16.jpg',
        del: 1200,
        price: 1000,
        saleOff: 10,
    },
]

M_L_a.map((i, j) => {
    document.getElementById('M_L_C_A').innerHTML += `<div class="product">
    <div class="product_img">
        <img src="${i.img}" alt="Image_NOT_found">
    </div>
    <div class="pro_detail">
        <h6> ${i.name}</h6>
        <del>Rs. ${i.del}</del>
        <p>Rs. ${i.price}</p>
    </div>
    <button class="sale">${i.saleOff}% off</button>
    <button class="addtoCart">
        <i class="fa fa-shopping-cart"></i>
    </button>
</div>`;
});


