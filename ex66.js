/*
Sometimes damaged nodes are unrecoverable. In that case, people that were 
connected to the crushed node must migrate to another district while 
administration attempts to fix the node.

But if a crushed node disconnects multiple districts from one another, then 
the network splits into two sub-networks and every sub-network should have 
their own Mayor. And Mayors must use pigeons for mailing between each other. 
In that case, when the network is split you don’t need hundreds of pigeons.

Your mission is to figure out how many Mayors you need to control the entire 
city when some nodes are crushed. In other words, you need to figure out how 
many sub-networks will be formed after some nodes are crush and not recovered.
*/

function subnetworks(net, crushes) {
    for(var i1 of crushes){
        for(var i of net){
            for(var i2 = 0; i2 < i.length; i2++){
                if(i1 === i[i2]){
                    i.splice(i2,1,' ')
                }
            }
        }
    }
    for(var x of net){
        for(var x1 = 0; x1 < x.length; x1++){
            
        }
    }
    console.log(net)
}

subnetworks ( [
    [ 'A' , 'B' ] , 
    [ 'B' , 'C' ] , 
    [ 'C' , 'D' ] 
] , [ 'C' , 'D' ] )