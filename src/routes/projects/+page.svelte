<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import FloatingButton from '$lib/components/FloatingButton.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import ProjectCard from './ProjectCard.svelte';
</script>

<Seo />
<div class="relative w-screen">
	<Container
		class="relative mt-[100px] flex min-h-screen flex-col gap-y-[80px] text-neutral-50 max-md:gap-y-10 max-md:p-4"
	>
		<div class="flex flex-col items-center justify-center gap-4">
			<h1 class="text-4xl font-extrabold text-green-600">My Projects</h1>
			<p class="text-lg">
				지금까지 수행해 온 다양한 프로젝트 중 5가지만 선별하여 소개해드립니다. 더 많은 정보를 얻고
				싶으시면 연락해주세요.
			</p>
		</div>
		<ProjectCard
			mainImage="/images/jjockgo-main.webp"
			gradientNumber={1}
			title="쪽고의 모험"
			links={[
				{
					text: '소스코드',
					url: 'https://github.com/on-stu/flutter-jjockgo',
				},
				{
					text: '플레이스토어',
					url: 'https://play.google.com/store/apps/details?id=info.minsu.jjockgo',
				},
				{
					text: '웹에서 플레이',
					url: 'https://jjockgo.minsu.info/',
				},
			]}
			description="쪽고의 모험이라는 게임은 Flutter와 Flame으로 만들어진 게임으로, Flappy Bird와 유사한 형식입니다. 게임은 부산대학교 쪽문 앞에 사는 고양이인 쪽고를 캐릭터로 사용하여 제작되었습니다. 쪽고의 모험은 누구나 쉽게 접근할 수 있는 형태로 제작되어, Android용으로는 플레이스토어에서 다운로드하여 즐길 수 있고, iOS용으로는 PWA 형식으로 웹에서 플레이할 수 있습니다. (앱스토어에서는 거부당했습니다.)"
		/>
		<ProjectCard
			isLeft
			mainImage="/images/honey-main.webp"
			gradientNumber={3}
			title="꿀잼 예능"
			description="유튜브를 보다 자동으로 영상을 만들어주는 프로그램이 있으면 좋겠다고 생각하여 토이프로젝트로서 해당 프로그램을 만들어보았습니다. 아쉽게도 유튜브 알고리즘의 선택을 받지는 못하였으나 그 과정속에서 비디오 처리하는 법을 많이 배울 수 있었습니다. 유튜브에서 재밌는 예능 쇼츠 영상들이 많이 올라오고 조회수도 높은 것을 보고 원본 유튜브 영상 링크, 제목, 시간만 지정해주면 자동으로 영상을 편집해주는 프로그램을 만들었습니다. python과 moviepy를 사용해 개발했습니다."
			links={[
				{
					text: '소스코드',
					url: 'https://github.com/on-stu/shorts-maker',
				},
				{
					text: '유튜브 채널',
					url: 'https://www.youtube.com/channel/UCOuyZWz2dHoSF42q-NkdGDw',
				},
			]}
		/>
		<ProjectCard
			mainImage="/images/devgate-main.webp"
			title="데브게이트"
			description="개발외주 스타트업 데브게이트의 사이트입니다. 견적 계산기, 문의하기 등 여러 기능들을 만들었고, 스크롤 애니메이션, SEO 등 고도화를 해냈습니다. 처음으로 SvelteKit, TailwindCss를 사용해봤고, 개발 경험이 너무 좋아서 현재까지도 프로젝트를 진행할 땐 해당 스택을 사용합니다. 백엔드는 nestjs를 사용했습니다. 견적 계산기의 결과물로서 pdf 파일을 다운로드 받을 수 있도록 구현했습니다. 즉, pdf 파일을 만들어 주는 로직도 처리해보았는데 나름 재밌는 경험이 되었습니다."
			links={[
				{
					text: '웹사이트',
					url: 'https://devgate.kr',
				},
			]}
		/>
		<ProjectCard
			isLeft
			title="캠퍼스데이트"
			links={[
				{
					text: '소스코드 (클라이언트)',
					url: 'https://github.com/on-stu/campusdate',
				},
				{
					text: '소스코드 (서버)',
					url: 'https://github.com/on-stu/campusdateBackend',
				},
				{
					text: '소스코드 (채팅 서버)',
					url: 'https://github.com/on-stu/campusdateChat',
				},
			]}
			gradientNumber={2}
			description="캠퍼스 데이트는 같은 대학 내 사람들과 소개팅을 할 수 있게 해주는 데이팅 앱입니다. React Native, Django, socket.io를 사용하여, 취미, 이상형, 성향을 비롯한 자동 매칭 알고리즘, 실시간 채팅 기능, 기타 게시판 기능들을 만들었습니다. 실제 사용되는 서비스 구현을 목적으로 했기 때문에 지금까지 만들던 프로젝트들 중 가장 많은 기능과 내용을 담고 있었고, 그렇기 때문에 앱이 제대로 시행되기 위해서는 기존에 만들었던 프로젝트들 보다 훨씬 더 높은 이해가 필요했고, 코드가 제대로 작성될 필요가 있었습니다. 그러한 과정속에서 React의 useState, useEffect, useMemo, useContext 등의 hook을 통한 lifecycle 관리의 제대로 된 이해를 할 수 있었고, 나아가, fcm, expo push-notification을 통해 푸쉬 알림 기능 구현에 성공했습니다."
		/>
		<ProjectCard
			mainImage="/images/hyeyum-main.webp"
			gradientNumber={1}
			links={[
				{
					text: '소스코드 (클라이언트)',
					url: 'https://github.com/on-stu/GwaOiHyeYum',
				},
				{
					text: '소스코드 (서버)',
					url: 'https://github.com/on-stu/GwaOiHyeYum_Server',
				},
			]}
			title="과외 혜윰"
			description="과외 알바를 여러 개 하다보니 생긴 불편함들과 코로나 시국이 합쳐져서 혜윰이라는 프로젝트를 기획해보게 되었습니다. 사실, 당시에는 개발 실력을 키우는 게 가장 큰 목적이었고, 프로젝트를 해보는 게 처음이었기 때문에 기획이 제대로 되지도 않았기에 결국, 개발 내지 코딩만 열심히 한 경험이 되었습니다.
		기본적으로 혜윰은 비대면 과외 플랫폼이며 과외 학생과 선생님을 이어주는 매칭 서비스, 과외 선생님들이 만든 문제 및 학습자료 컨텐츠 거래 서비스, 과외 학생 관리 서비스(과제 및 커리큘럼 등)를 제공하고자 시작했으나 기획에서의 한계를 절실히 느끼고 아쉽지만 처음으로 큰 프로젝트를 생각해내고 개발해봤다는 데에 의의를 두기로 했습니다."
		/>
	</Container>
	<FloatingButton />
</div>
