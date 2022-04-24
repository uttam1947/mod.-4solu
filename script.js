var names=new Array();
names[0] = "Rajat";
names[1] = "Ujjawal";
names[2] = "Abhishek";
names[3] = "Ajeet";
names[4] = "jagdish";
names[5] = "Shivesh";
names[6] = "Himesh";
names[7] = "Vivek";
names[8] = "Jay";
names[9] = "Aman";



for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}