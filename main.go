package main

import (
	"fmt"
	"os"
)

func CamelToSnakeCase(s string) string{
	final := ""
	for i,v := range s {
		if i == len(s) - 1 && v >= 'A' && v <= 'Z' {
			final = ""
		}else{
				if v >= 'A' && v <= 'Z' {
							final += "_"
						} 
						final += string(v)
					}
					}
					
					if final == ""{
						fmt.Println("yes")
						for _,v := range s{
							final += string(v)
						}
						// return final
					}
					// fmt.Println(nFinal)
					fmt.Println(final)
					return final
				}
		// }
		// }
	// final += string(v)		
			// if i == len(s){
				// if v >= 'A' && v <= 'Z' {
					// nFinal += string(v)
					// return nFinal
				
			// }

func main(){
	arg := os.Args[1:]
	// fmt.Println(arg[0])
	fin := CamelToSnakeCase(arg[0])
	fmt.Println(fin)
	// fmt.Println("x-ray")
}