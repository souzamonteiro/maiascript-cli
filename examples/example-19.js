a=[[1,2],[3,4]];b=[[5,6],[7,8]];c={"real":"1","imaginary":"+2"};d={"real":"3","imaginary":"+4"};system.println(core.add("a + b = ",core.toString(core.add(a,b))));system.println(core.add("a - b = ",core.toString(core.sub(a,b))));system.println(core.add("a * b = ",core.toString(core.mul(a,b))));system.println(core.add("a * 2 = ",core.toString(core.mul(a,2))));system.println(core.add("2 * b = ",core.toString(core.mul(2,b))));system.println(core.add("a ^ 2 = ",core.toString(core.power(a,2))));system.println(core.add("a ^ -1 = ",core.toString(core.power(a,-1))));system.println(core.add("core.det(a) = ",core.det(a)));system.println(core.add("core.diag(a) = ",core.diag(a)));system.println(core.add("c + d = ",core.toString(core.add(c,d))));system.println(core.add("c - d = ",core.toString(core.sub(c,d))));system.println(core.add("c + 2 = ",core.toString(core.add(c,2))));system.println(core.add("2 + d = ",core.toString(core.add(2,d))));system.println(core.add("c - 2 = ",core.toString(core.sub(c,2))));system.println(core.add("2 - d = ",core.toString(core.sub(2,d))));system.println(core.add("c ^ 2 = ",core.toString(core.power(c,2))));system.println(core.add("c * d = ",core.toString(core.mul(c,d))));system.println(core.add("c * 2 = ",core.toString(core.mul(c,2))));system.println(core.add("2 * d = ",core.toString(core.mul(2,d))));system.println(core.add("c / d = ",core.toString(core.div(c,d))));