import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egresos'
})
export class EgresosPipe implements PipeTransform {
	// transform(items: any, term: any): any {
	// 	if ( term === '' || term === undefined) {
	// 	  return items;
	// 	}
		
	
	// 	const resultadoConsulta = [];
	// 	for ( const post of items ) {
	// 	  if (post.concepto === term) {
	// 		resultadoConsulta.push(post);
			
	// 		}
	// 	}
	// 	return resultadoConsulta;
	//   }

  transform(items: any, term: any):any {
		if(term === undefined){
			return items;
		}
		
		
		return items.filter(function(item){
			return item.concepto.toLowerCase().includes(term.toLowerCase());
			
		});
	}

}
