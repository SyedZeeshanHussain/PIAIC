pragma solidity ^0.6.0;

contract Vehicle {
    function doService()  public virtual returns (string memory){
        return "Do Vehicle Service";
    }
}

contract Car is Vehicle {
     function doService()  public override returns (string memory){
        return "Do Car Service";
    }
}

contract Bus is Vehicle {
     function doService()  public override returns (string memory){
        return "Do Bus Service";
    }
}

contract Truck is Vehicle {
     function doService()  public override returns (string memory){
        return "Do Truck Service";
    }
}

contract WorkShop {
     event logString(string);
     function provideService() public returns (uint) {
        Vehicle v = new Vehicle();
        Car c = new Car();
        Bus b = new Bus();
        Truck t = new Truck();
        emit logString(v.doService());
        emit logString(c.doService());
        emit logString(b.doService());
        emit logString(t.doService());
    }
}