function ang_while_loop() {
    var ang_number = prompt ("magbigay ng no.",1);
    ang_number = parseInt (ang_number) ;
    /** validation if NOT A NUMBER (NAN) */
    if (isNaN (ang_number)) {
        document.write("DAPAT NO. LANG ANG INE-ENTER");

        /** return means end of execution,get out of function */
        return;
    }
    /** this is the for loop */
    /** EXERCISE: CONVERT TO WHILE LOOP, USING TRIANGLES
    * save in GIT and submit link of repo to marlo.servo@yahoo.com
    */
    var i=0;
    while (i<ang_number) {
    setTimeout (function(){
    var da_triangle = document.createElement("div");
        da_triangle.classList.add("triangle");
        document.body.appendChild(da_triangle);
    } , 400 * i);
    i++;
   }
}
