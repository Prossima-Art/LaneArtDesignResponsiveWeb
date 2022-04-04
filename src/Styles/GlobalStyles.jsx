import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background: #fff;
  transition:0.5s;
	color: black !important;
	margin-left: 2em;
	margin-right: 2em;

	.LogoHeader path{
		fill: #000 !important;
	}

	.navbar{
		background:red;
	z-index:2 !important;
		left:0;
	right:0;
	top:0;
	.nav-link{
	color:#000 !important;
	}
	
}
.color{
	color: #000;
}
.BtnPrimary{
	background: #D500F9;
	color: white !important;
	transition:1s;
		
		&:hover{
			background-color: #D500F9;
			transform: translateY(-10%);
		}
	
}

.BtnSecundary{
	background: #none;
	color: #D500F9 !important;
	cursor: pointer;
	transition:1s;
		
		&:hover{
			background-color: #fff;
			transform: translateY(-10%);
		}
}

.cards{
	background: #F6F6F6;
	transition:1s;
	&:hover{
		color-hover: #fff;
		background-color: #C697FF;
		transform: translateY(-10%);
			}
	}

	.textIcon{
		color: #000 !important;
	}
	.textbold{
		color: #000 !important;
	}

	.p-title{
		color: #000 !important;
	}

	.p-subtitle{
		color: #000 !important;
	}

}

.rewards{
	background: #F6F6F6;
}

.TumbProjects{
	background: rgba(255, 255, 255, 0.5);
	
}

.hover{
	transition:1s;

	&:hover{
		transform: translateY(-4%);
	}
}






.dark{
	  background: #1F1D2B;
	  color: white !important;

	.LogoHeader path{
		fill: #fff !important;
	
	}

	.BtnPrimary{
		color: #000 !important;
	}

	.BtnSecundary{
		color: #D500F9 !important;
	}
	
	.cards{
		background: #252836;
		
&:hover{

		color-hover: #fff;
		background-color: #9C73FF;
		transform: translateY(-10%);
	}
}


	.textIcon{
		color: #fff !important;
	}
	.textbold{
		color: #fff !important;
	}

	.p-title{
		color: #fff !important;
	}

	.p-subtitle{
		color: #fff !important;
	}
	.navbar{
		background:transparent !important;
		z-index:2 !important;
		left:0;
		right:0;
		.nav-link{
		color:#fff !important;
		
		}
}

.color{
	color: #fff;
}

a.dropdown-item{
	color: #000 !importtant;
}

.rewards{
	background: #252836;
}

.TumbProjects{
	background: #252836;
}

.banner svg rect{
	fill: #252735;
	}
}
 }`;
