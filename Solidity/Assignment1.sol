pragma solidity >=0.4.0 <0.7.0;

contract studentEnrollment{
    
    address payable private myAddress = 0xaD335c3c503aBd738Af9a7690FB41f9fadcBE91A;
    
    enum RegType {onstie, online}
    enum Gender {male, female}
    
    struct Student {
        string name;
        uint age;
        Gender[] gender;
        bool bsDegree;
        RegType[] regType;
    }
    
    mapping (address => Student) students;
    address[] public studentAccts;
    
    function setStudent(
        address _address,
        string memory _name,
        uint _age,
        Gender _gender,
        bool _degree,
        RegType _onStieOnLine) public {
            
        Student storage student = students[_address];
        
        student.name = _name;
        student.age = _age;
        student.gender.push(_gender);
        student.regType.push(_onStieOnLine);
        student.bsDegree = _degree;
        
        if(_degree == true)
        
        studentAccts.push(_address) -1;
    }
    
    function getStudents() view public returns(address[] memory) {
        return studentAccts;
    }
    
    function getSingleStudent(address _address) view public returns (
        string memory, uint, Gender[] memory, bool, RegType[] memory)
        {
        return (students[_address].name,
                students[_address].age,
                students[_address].gender,
                students[_address].bsDegree,
                students[_address].regType);
    }
    
    function countStudents() view public returns (uint) {
        return studentAccts.length;
    }
    
    function setAddress(address payable add) public {
        myAddress = add;
    }
    
    function getBalance() public view returns(uint){
        return myAddress.balance;
    }
    
    function getAddress() public view returns(address){
        return myAddress;
    }
    
    function pay() public payable{
        require(msg.value == 2 ether);
        myAddress.transfer(msg.value);
    }
}
