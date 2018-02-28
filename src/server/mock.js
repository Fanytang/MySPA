// 模拟数据

import Mock from 'mockjs'
Mock.setup({
	// timeout:500
})
// 轮播图图片
Mock.mock(
	'home/swipe/img',
		{
			'imgData|3':[
				{
					img:'@dataImage("375x150","轮播图")'
				}
			]
		}

	);
// 信息列表
Mock.mock(
	'friend/getList',
		{
			"data|10":[
                {
                    "name":"@cname",
                    "tag|1":["活泼","可爱","温柔","善良","聪明","睿智","机智","天才"],
                    "userIcon":"@image('100x100','#FF6600')",
                    "detail":"@cparagraph",
                    "imgGrounp|2-9":[{"src":"@dataimage('375x375','#00FF90')"}],
                    "articleId|+1":1,
                    "data":"@now('day', 'yyyy-MM-dd')"
                },
            ]
		}
	)

// 信息详情


// 个人信息
Mock.mock(
	'personal/info',
		{
		
	        "personalData":
	            {
	                "name":"@cname",
	                "tag|1":["活泼","可爱","温柔","善良","聪明","睿智","机智","天才"],
	                "userIcon":"@dataimage('100x100','header')",
	                "userId|+1":1,
	                "city":"@city",
	                "sex|1":["男","女"]
	            }
	        
		}

	);