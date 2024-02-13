import express from 'express';
import multer from 'multer';
const router = express.Router();
import { authUser,
     registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getAllUsers,
    getUserId
     } from '../controllers/userController.js';
import { protect,isAdmin } from '../middleware/authMiddleware.js';
import { deletegreenId, getgreen, getgreenId, green } from '../controllers/OrdergreenhouseController.js'
import {orderLandScapes,getorderLandScapes, getorderLandScapeId, deleteorderLandScapeId}  from '../controllers/OrderLandScapeController.js'
import { service ,getservices,getserviceId,deleteserviesId,UpdateService} from '../controllers/ServicesControllers.js';
// import fromidable from 'express-formidable';
import {Createservice,getservicesdetail,getservicedetailId,deleteserviesdetailId,updateserviesdetail } from '../controllers/ServiceDetailController.js'


// Multer configuration for handling file uploads
const storage = multer.diskStorage({
     filename: (req, file, cb) => {
       cb(null, file.originalname);
     },
   });
   const imageUpload = multer({ storage: storage });
   


router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(isAdmin,getAllUsers).put(protect,isAdmin, updateUserProfile);


router.post('/greenhouse',imageUpload.single('image') ,green);
router.get('/greenhouse',isAdmin, getgreen);
router.get('/greenhouse/:id',isAdmin, getgreenId);
router.delete('/greenhouse/:id',isAdmin,deletegreenId);

router.post('/orderLandScape' ,imageUpload.single('image'),orderLandScapes);
router.get('/orderLandScape',isAdmin,getorderLandScapes);
router.get('/orderLandScape/:id', isAdmin,getorderLandScapeId );
router.delete('/orderLandScape/:id',isAdmin,deleteorderLandScapeId);



router.post('/Services',isAdmin,imageUpload.single('image'),service);
router.get('/Services',getservices);
router.get('/Services/:id', isAdmin,getserviceId);
router.delete('/Services/:id', isAdmin,deleteserviesId);
router.patch('/Services/:id',isAdmin,UpdateService);

router.post('/ServicesDetails',isAdmin,imageUpload.single('image'),Createservice);
router.get('/ServicesDetails',getservicesdetail);
router.get('/ServicesDetails/:id',isAdmin, getservicedetailId);
router.delete('/ServicesDetails/:id',isAdmin,deleteserviesdetailId);
router.patch('/ServicesDetails/:id',isAdmin,updateserviesdetail);





export default router;