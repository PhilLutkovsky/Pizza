class pizza{
  //type constructor below
  constructor(s,mT,vT){
    this.size = s;
    this.meatToppings = mT;
    this.veggieToppings = vT;
  }


  //type instance functions below
  sizeCost(){
    if(this.size = "S"){
      return 7.99;
    }
    else if(this.size = "M"){
      return 9.99;
    }
    else if (this.size = "L"){
      return 12.99;
    }
    else if (this.size = "XL"){
      return 15.99;
    }
  }

  toppingCost(top){
    if(top == "meat"){
      return .99*this.meatToppings.length;
    }
    else if(top == "veggie"){
      return .50*this.veggieToppings.length;
    }
  }

  price(){
    return this.sizeCost() + this.meatToppingsCost("meat") + this.veggieToppingsCost("veggie");
  }

  addTopping(toptype, newtop){
    if (toptype == "meat"){
      this.meatToppings.push(newTop);
    }
    else if (toptype == "veggie"){
      this.veggieToppings.push(newTop);
    }
  }

  removeTopping(toptype, newtop){
    if(toptype == "meat"){
      let e = this.meatToppings.indexOf(newtop);
      var n = this.meatToppings.splice(e,1);
    }

  }



  //type class functions below

  static promotionalDeal(pizza, percent){
    let z = 100-percent;
    z = z/100;
    return pizza.price()*z;
  }
}
