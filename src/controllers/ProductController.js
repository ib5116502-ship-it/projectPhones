import Product from "../models/Product.js";

class ProductController {

    async GetAll (req , res){
        try{
            
            const products = await Product.find()
            res.status(200).json(products)
            
        }catch(err){
            res.status(404).json("Ошибка при получении товаров: " + err)
        }
    }
  async Create(req, res) {
    try {
      const {brand,model,title,description,price,quantity,storage,color,screen,camera,battery,os,cpu,ram} = req.body;
      const product = await Product.create({brand,model,title,description,price,quantity,storage,color,
        specs: {screen,camera,battery,os,cpu,ram}
      })

      res.status(200).json(product)
    } catch (err) {
        res.status(400).json("Ошибка при создании товара: ", + err)
    }
  }

   async update (req , res){
        try {
      const { id } = req.params;
      const {brand,model,title,description,price,quantity,storage,color,} = req.body;
      const updates = await Product.findByIdAndUpdate(id,{brand,model,title,description,price,quantity,storage,color,
         specs: {screen,camera,battery,os,cpu,ram}
      }, {new: true})
      if(!updates){
           res.status(404).json("Такого товара не существует!");
      }

      res.status(200).json(updates)
    } catch (err) {
        res.status(500).json({message: "Ошибка при обновление"})
    }
    }


    async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        res.status(404).json("Такого товара не существует!");
      }
      res.status(200).json("Товар успешно удален!");
    } catch (err) {
      res.status(500).json("Ошибка при выполнении запроса: " + err);
    }
  }

    
}

export default new ProductController();
