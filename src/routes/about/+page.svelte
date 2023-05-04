<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import FloatingButton from '$lib/components/FloatingButton.svelte';
	import ScrollDetectContainer from '$lib/components/ScrollDetectContainer.svelte';
	import { fadeFromBottom } from '$lib/utils/scrollDetectionStyle';

	let isInView: boolean;
</script>

<div class="relative w-screen bg-black">
	<ScrollDetectContainer bind:isInView>
		<Container class=" text-neutral-50 max-md:px-4 {fadeFromBottom(isInView)}">
			<div class="h-[100px]" />
			<h1 class="mb-4 text-4xl font-extrabold text-green-600">About Me</h1>
			<div class="flex w-full flex-col gap-y-4">
				<p class="text-lg">
					안녕하세요! 저는 개발자로 활동 중인 김민수입니다. 웹, 앱개발 분야에서 다양한 프로젝트를
					진행하며, 이를 통해 높은 수준의 기술력을 갖추게 되었습니다. 풀스택 개발자이며, 최근에는
					ai에도 관심을 가지고 공부하고 있습니다. 웹이나 모바일 앱뿐만 아니라 데스크탑 앱, 서버,
					자동화, 크롤러 등 많은 분야에 흥미가 있어 모두 개발 가능합니다. 나아가 제가 해보지 않았던
					분야라도 오히려 도전해볼 기회로 여기며 기쁘게 개발합니다.
				</p>
				<p class="text-lg">
					누구보다 개발을 좋아합니다. 여자친구가 질투할 정도에요 😂. 아래에서도 설명드리겠지만,
					코딩으로서의 개발을 넘어 구현이라는 의미로의 개발을 즐기며 상상을 현실로 만드는 일에 큰
					보람을 느낍니다.
				</p>
				<p class="text-lg">이제 제 이야기를 시작해볼까 합니다.</p>
				<h2 class="text-2xl font-bold">Coding as a Toy</h2>
				<img
					src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
					alt="toy"
					class="aspect-[1.5] w-full rounded-2xl object-cover object-center"
				/>
				<p class="text-lg">
					어렸을 때부터 컴퓨터는 제 장난감이었습니다. 어른이 된 지금도 코딩만큼 재미있는 건 없는 것
					같아요. 상상 속에 있는 서비스를 실제로 구현했을 때의 쾌감은 저에게는 어떤 성취감보다 더
					크게 다가오는 것 같습니다. 제겐 저보다 두 살 어린 남동생이 있는데, 초등학교때는 동생
					컴퓨터를 해킹해서 장난치곤 했었습니다. <span class=" text-neutral-400 line-through"
						>(그땐 미안했다..!)</span
					> 아무튼, 무언갈 구현하는 개발이라는 일 자체가 기쁨인 저에게 성장은 너무 쉬운일이었습니다.
				</p>
				<p class="text-lg">
					개발자로서 업무를 하고 남는 시간엔 언제나 토이프로젝트 하나씩은 진행했습니다. 최신 개발
					스택을 배우고 적용해보는 건 늘 새롭고 짜릿합니다.
				</p>
				<h2 class="text-2xl font-bold">언제나 짜릿한 도전</h2>
				<img
					src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
					alt="fireworks"
					class="aspect-[1.5] w-full rounded-2xl object-cover object-center"
				/>
				<p class="text-lg">
					도전하는 삶이 저의 숙명인지는 모르겠으나, 항상 끝없는 도전을 갈구해왔습니다. 할 줄 아는
					것만 반복하는 건 적성에 맞지 않더라고요, 끝없이 성장하고 싶습니다. 언젠간 아주 많은
					사람들에게 기쁨을 주는 서비스를 개발하고 싶습니다. 그 길로 가는 과정에서 많은 고객분들을
					만나고 여러 프로젝트를 수행해보려 합니다. 이 역시 제겐 늘 도전이고 그 안에서 살아있음을
					느낍니다.
				</p>
				<p class="text-lg">
					처음 일했던 회사는 SIFFER라는 스타트업이었습니다. 당시에 React, React Native로 웹과 앱을
					어느정도 만들 줄 아는 수준이었는데요, 현업에 처음 내던져지니 Challenging한 업무가 대단히
					많았습니다. AI라곤 학부에서 기초 수업을 들은 게 전부인 제가 AI 모델을 짜야 했고, 서버에
					탑재하여 실시간으로 AI 예측 값을 받아올 수 있어야 했습니다. python으로 모델을 짰기 때문에
					flask라는 라이브러리를 통해 코드를 짰고 AI 백엔드를 구축해낼 수 있었습니다. 또, 정말 많고
					다양한 사이트의 데이터를 크롤링해와야 했습니다. 한 페이지에서만 동작하는 웹 크롤러를
					만드는 것은 그리 어려운 작업은 아니지만 최소 100개의 페이지에서 동작하는 크롤러를 만드는
					것은 쉬운 일이 아니었습니다. 크롤링해야 하는 페이지는 의류 웹 쇼핑몰이었습니다. 그러던 중
					갈피를 찾아 여러 웹 쇼핑몰이 어떤 패턴을 가진다는 것을 확인하였고 크롤러 자체를 자동으로
					만들어주는 프로그램도 개발에 성공했습니다.
				</p>
				<h2 class="text-2xl font-bold">코더가 아닌 개발자</h2>
				<p class="text-lg">
					개발을 시작하고 얼마지나지 않아 팀에서 일할 기회가 생겼었는데요, 그때만 하더라도 스스로를
					개발자가 아닌 코더라고 생각했던 것 같습니다. 사실, 코더와 개발자의 차이도 인지하지 못하고
					있었습니다. 판교 소재 외주 스타트업 <a
						href="https://devgate.kr"
						target="_blank"
						class="underline">데브게이트</a
					>에서 일을 하면서부터 제대로 이해할 수 있었는데요, 그 전까지는 간결한 코드, 논리적인
					코드를 작성하는 것이 개발자로서의 가장 큰 목표라고 생각했습니다. 다시 말해, 그때까지 제
					목표는 클린코드 자체였다고 해야할 것 같습니다. 그런데 실제 고객사와 소통을 해보고 다수의
					프로젝트를 핸들링해보니 코드의 완성도가 항상 프로젝트의 완성도를 보장해주지 못하며
					클린코드 자체는 고객사에게 큰 임팩트를 주지 못하는 현상을 확인했습니다. 개발자는 구현하는
					자로서 고객사의 프로젝트에 줄 수 있는 인사이트가 보다 많습니다. 개발자의 시각에서
					비효율적인 플로우, 개발 비용이 너무 높은 기능들, 그에 대한 대안들 등 조용히 코딩만 하는
					것보다 이러한 지점들을 기획자, 디자이너들과 공유하는 게 훨씬 임팩트가 컸습니다.
				</p>
				<p class="text-lg">
					물론, 클린코드의 중요성을 부인하는 것이 아닙니다. 규모가 큰 프로젝트일 수록 클린코드의
					필요성은 기하급수적으로 증가합니다. 이를 위해 조금이라도 핸들링하기 어렵다고 느껴질 때
					리팩토링을 진행합니다. 요지는 우선순위에 있습니다. 개발자가 할 수 있는 일들 중 클린코드
					작성보다 더 큰 효용을 줄 수 있는 일이 많다는 것입니다. 이러한 깨달음을 바탕으로 코더에서
					진정한 개발자로 성장할 수 있었던 것 같습니다.
				</p>
				<h2 class="text-2xl font-bold">I'm still hungry</h2>
				<p class="text-lg">
					‘나는 여전히 배고프다’ 거스 히딩크 감독의 명언인데요, 월드컵 4강 신화를 쓴 주역이었음에도
					여전히 더 높은 곳을 바라보고 있다는 인터뷰에 많은 사람들이 감명을 받았습니다. 저 역시도 저
					구절을 참 좋아하는데요, 지금 제가 하려는 말이기도 합니다. 다수의 프로젝트를 수행했고 여러
					고객들을 접해보았지만 여전히 더 큰 프로젝트, 더 많은 프로젝트를 하며 제 가치를
					증명해보이고 싶습니다. 제 경험과 노하우로 외주로써, 혹은 팀 내에서 큰 임팩트를 드릴 수
					있을거라 믿어 의심치 않습니다. 관심이 있으시다면 연락바랍니다.
				</p>
			</div>
			<div class="h-[100px]" />
		</Container>
	</ScrollDetectContainer>
	<FloatingButton />
</div>
